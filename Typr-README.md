# Typr.js

This is a simple animator for replicating high quality typing animations on high quality pages:

```
typewriter (Stri,   Loca,     Spee )
|        | (String, Location, Speed)
```

Use like => 
```
typewriter('> Hello World!', "#resulti", 100);
```

### String
* Set the string to be typed.
  * (Can type more than just one place at once.)
  * Just use fuction again like:
    ```
    typewriter('Hello World!', "#resulti", 100);
    
    typewriter('I am very cool,', "#resulti", 20);

    typewriter('you cannot compete!', "#resulti", 300);
    ```

### Location
* Set the querySelector location.

### Speed
* Set the speed the text types.
  * Uses Timeout, so it is in ms.


#### See it in use on this demo page [here](https://redr.spcfork.repl.co/).