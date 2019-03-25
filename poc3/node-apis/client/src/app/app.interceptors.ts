import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './http-interceptors/noop-interceptor';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
