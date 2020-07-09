window.addEventListener('load', () => {
    const inputElements = {
        expenseValue: document.querySelector('#expenseNum'),
        expenseMonth: document.querySelector('#expenseMonth'),
        expenseType: document.querySelector('#expenseType'),
        submitButton: document.querySelector('#form button'),
    };
    

    function addExpense(e) {
        e.preventDefault();
        const value = Number(inputElements.expenseValue.value);
        const month = inputElements.expenseMonth.value;
        const type = inputElements.expenseType.value;
        if (!value || !month || !type) { return; }

        const currentEl = document.querySelector(`tr.${type} td.${month}`);
        const currentTotal = document.querySelector(`tr.${type} td.total`);
        
        const sectionClass = currentEl.parentNode.className.split(' ')[0];
        const currentSectionTotal = document.querySelector(`tr.${sectionClass} td.total`);
        
        const currentValue = ((Number(currentEl.textContent) || 0) + value).toFixed(2);
        currentEl.textContent = currentValue;
        currentTotal.textContent = ((Number(currentTotal.textContent) || 0) + value).toFixed(2);
        currentSectionTotal.textContent = ((Number(currentSectionTotal.textContent) || 0) + value).toFixed(2);
    }


    inputElements.submitButton.addEventListener('click', addExpense);
});