import { get } from './request'

const sayHello = () => {
    return get('/sayHello')
}

export {
    sayHello
}