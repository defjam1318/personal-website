export function partialLoader (location) {
    return async function(x) {
        const common = {
            header: await this.load(`${location}/common/header.hbs`),
            footer: await this.load(`${location}/common/footer.hbs`),
        };
    
        let result = {};
    
        if (x) {
            result = Object.entries(x).reduce(async (acc, [key, value]) => {
                acc[key] = await this.load(`${location}/${value}.hbs`);
                return acc;
            }, {}); 
        }
    
        return Object.assign(result, common);
    }
}