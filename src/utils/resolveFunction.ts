import { isFunction } from 'lodash';
import { log } from './log';

/**
  * Resolves a function on the current target object. It first will
  * try and resolve on the context object, then the target object,
  * then an error will be thrown if the method can not be resolved.
  * @param {Function|string} method The method or method name.
  * @param {Object} [context] The context object to resolve from.
  * @param {Object} [target] The target object to resolve from.
  * @returns {Function} The resolved function.
  */
export function resolveFunction(method: string|Function, context?: any, target?: any): any {
  if (isFunction(method)) {
    return method;
  } else if (context && isFunction(context[method])) {
    return context[method];
  } else if (target && isFunction(target[method])) {
    return target[method];
  }

  throw new ReferenceError(log(`Can not resolve method ${method} on any target Objects`));
}