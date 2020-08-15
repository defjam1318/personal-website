export function validator(type, input) {
    const types = {
        email: () => input.length >= 3,
        password: () => input.length >= 6,
        name: () => input.length >= 6,
        description: () => input.length >= 10,
        imageUrl: () => input.startsWith('http://') || input.startsWith('https://'),
        dateTime: () => typeof input === 'string',
        // genres: () => Array.isArray(input.split(' ')) === true,
    };

    return types[type]();
}