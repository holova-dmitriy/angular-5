import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpAuthInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmMDcwMjAxZmE3ZGUyMGY5Nzk2NDgwNTZhNGNlMmEyMGU1Zjg3YWZjZWVmM2IzNTFmYzVjMTBhMzcxNTAwNTY1NTk0YWE5MGMzYjlmN2M5In0.eyJhdWQiOiI5IiwianRpIjoiMmYwNzAyMDFmYTdkZTIwZjk3OTY0ODA1NmE0Y2UyYTIwZTVmODdhZmNlZWYzYjM1MWZjNWMxMGEzNzE1MDA1NjU1OTRhYTkwYzNiOWY3YzkiLCJpYXQiOjE1MTI0MDExNzcsIm5iZiI6MTUxMjQwMTE3NywiZXhwIjoxNTQzOTM3MTc3LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.vPuDeP4pukkIu3CH_fJ_diqUNalKR2_ewHZiAerySGNhTFksrLAZO5iAWejwxRlXFw_4HPwVhUnxGKCvcfa85GVOgu3SNafVotF2IqzoqfZi8NXI-Npu4833RA7a_IIuZ1vWxcf1c1UN0NyuuK8Bm7knbqhMFaB0FDsafNA_dK3t0VOQwEah8Uw8KY_6X0beL-zGlNyNm_bPkABpwSxd7vmIHrMvjfYiEugK574OW0uClmiEWWj72AJvCFhk1bu15EYP1mRgkoSTUCaCGSUlii-AWQd-1uCBhIIw1b9O7cEngzVJo1K_5n5bnEj3rZP4Uz45taPuA2ce6gd-fb9GCuOvRkoZqSKiHN0JXBKeRfmVwlNPeDu_UNg1a77pFnsowxyvn2Nz5CIVzP6nPFnTHlray9DX2-FSp10wZrjiRWfqjT32nZKDyMPXewvJUpUAsI4SMCWp58RVAR6JUW1Je3mp7WTlxchHq9igMYapAz_8m6fM1aE6HoMMVxL1gCtZdGlhCmvIuKYye_9JgmqGqTUVyimMbsWTFFAAh5xCRbMYRIl66mNg1n-JGuy5yX001r3L6ku7VeO5OrjJbpkGiHal_O5m82kxYw5UVLIwQL_qicSfS-zdAuXQ2RBMMHZXJ_n_pgPnfO-1HG63ntXdSUGq7n9nihDk2z2OPL7btv4',
        partner: 'mavenirus',
        'content-type': 'application/json'
      }
    });

    return next.handle(authReq)
      .catch((error) => Observable.throw(error)) as any;
  }
}
