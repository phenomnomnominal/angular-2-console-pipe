# angular-2-console-pipe
Angular 2 pipe for logging to the console from a template!

# Usage:

```javascript
import { PLATFORM_PIPES } from '@angular/core';
import { ConsolePipe } from 'angular-2-console-pipe';

bootstrap(App, [{
    provide: PLATFORM_PIPES,
    useValue: [ConsolePipe],
    multi:true
}]);
```

Then, in your template:

```html
{{ someObject | console }}
```
