export const useMemo = (fn) => {
    let cache = {};
    return (...args) => {
        const key = args.join('-'); // Creamos una clave única para el conjunto de argumentos
        if (!cache[key]) {
            cache[key] = fn(...args); // Llamamos a fn con los argumentos individuales
        }
        return cache[key];
    };
};