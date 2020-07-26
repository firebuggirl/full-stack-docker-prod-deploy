# Bugs

- 7-26-2020

- Unhandled Rejection (SecurityError): The operation is insecure

```js
 navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
});
```

- in `index.js`:

```js
 //serviceWorker.unregister();
 serviceWorker.register();
```

## Bug #2

```yaml
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
```

`npm info react-scripts version`

- in `package.json`:

  - replace `"react-scripts": "^3.x.x"` with `"react-scripts": "^3.4.1"` (or the latest available version)

  - Delete node_modules => reinstall

  - https://stackoverflow.com/questions/60234640/typeerror-err-invalid-arg-type-the-path-argument-must-be-of-type-string-re => caused by running `npm audit fix`?? 
