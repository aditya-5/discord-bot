export default class Deps{

    static #instances = new Map();

    static add(type, instance){
        return this.#instances.set(type, instance).get(type)
    }

    static get(type){
        return this.#instances.get(type) ?? this.add(type, new type())
    }
}