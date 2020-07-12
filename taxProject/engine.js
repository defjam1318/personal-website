import * as data from './data.js';

window.addEventListener('load', () => {
    let collection = [];

    const inputElements = {
        expenseValue: document.querySelector('#expenseNum'),
        expenseMonth: document.querySelector('#expenseMonth'),
        expenseType: document.querySelector('#expenseType'),
        submitButton: document.querySelector('#form button'),
        retrieveButton: document.querySelector('#retrieveFromServer'),
        deleteButton: document.querySelector('#deleteAll'),
    };

    function fixContent(els, value) {
        els.forEach(([el, selector]) => {
            const newValue = ((Number(el.textContent) || 0) + value).toFixed(2);
            el.textContent = newValue
            const elFromCollection = collection.find(x => x.element === el);

            if (!elFromCollection) {
                let id;
                data.requestToPost({ selector: selector, value: Number(newValue) })
                    .then(data => {
                        id = data.objectId;
                        collection.push({
                            element: el,
                            value: Number(newValue),
                            id: id
                        });
                    })
                    .catch(error => console.error(error));

            } else {
                elFromCollection.value += value;
                data.requestToPut(elFromCollection.id, { value: elFromCollection.value });
            }
        });

    }


    function addExpense(e) {
        e.preventDefault();
        const value = Number(inputElements.expenseValue.value);
        const month = inputElements.expenseMonth.value;
        const type = inputElements.expenseType.value;
        if (!value || !month || !type) { return; }

        const currentElSelector = `tr.${type} td.${month}`;
        const currentEl = document.querySelector(currentElSelector);

        const currentTotalSelector = `tr.${type} td.total`;
        const currentTotal = document.querySelector(currentTotalSelector);


        const sectionClass = currentEl.parentNode.className.split(' ')[0];
        const currentSectionTotalSelector = `tr.${sectionClass} td.total`;
        const currentSectionTotal = document.querySelector(currentSectionTotalSelector);

        fixContent([
            [currentEl, currentElSelector],
            [currentTotal, currentTotalSelector],
            [currentSectionTotal, currentSectionTotalSelector]
        ], value);
    }

    function populateFields(e) {
        collection = [];
        data.requestToGet()
            .then(items => {
                if (items.length === 0) { console.log('nothing to show'); return; }
                items.forEach(({ selector, value, objectId }) => {
                    const el = document.querySelector(selector);
                    el.textContent = value.toFixed(2);
                    collection.push({
                        element: el,
                        value: value,
                        id: objectId
                    });
                });

            });
    }

    // function handleEdit(e) {
    //     e.preventDefault();
    //     const cell = e.target;
    //     if (cell.nodeName !== 'TD' || cell.className === '' || cell.textContent === '') { return; }
    //     const input = document.createElement('input');
    //     input.setAttribute('type', 'number');
    //     input.value = Number(cell.textContent);
    //     cell.textContent = '';
    //     cell.appendChild(input);
    //     input.addEventListener('keydown', (e) => {
    //         if (e.key === 'Enter') {
    //             cell.textContent = input.value;
    //             input.remove();
    //         }
    //     })
    // }

    // document.body.addEventListener('dblclick', handleEdit);
    inputElements.submitButton.addEventListener('click', addExpense);
    inputElements.retrieveButton.addEventListener('click', populateFields);
    inputElements.deleteButton.addEventListener('click', () => {
        collection.forEach(item => {
            item.element.textContent = '';
            data.requestToDelete(item.id);
        });
    });
});