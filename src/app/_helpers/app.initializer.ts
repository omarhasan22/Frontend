import { catchError, of } from 'rxjs';

import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => accountService.refreshToken()
        .pipe(
            // catch error to start app on success or failure
            catchError(() => of())
        );
}

// import { catchError, tap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { AccountService } from '@app/_services';

// export function appInitializer(accountService: AccountService) {
//     return () => {
//         const token = localStorage.getItem('accessToken');

//         if (token) {
//             // If a token is present in localStorage, attempt to refresh it
//             return accountService.refreshToken()
//                 .pipe(
//                     // Use tap to perform an action on success without affecting the stream
//                     tap(() => console.log('Token refreshed successfully')),
//                     // catchError is used to handle errors and still allow the app to start
//                     catchError(() => of())
//                 );
//         } else {
//             // If no token is present, simply return an observable of an empty result
//             return of();
//         }
//     };
// }
