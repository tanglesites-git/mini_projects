// Observer Pattern
const observers = new Map();

export const subscribe = (eventName: string, callback: Function) => {
  if (!observers.has(eventName)) {
    observers.set(eventName, []);
  }
  observers.get(eventName).push(callback);
};

export const publish = (eventName: string, ...data: any) => {
  if (!observers.has(eventName)) {
    return;
  }
  observers.get(eventName).forEach((callback: Function) => {
    callback(...data);
  });
};
