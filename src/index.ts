import { Router } from '@angular/router';
export * from './User';
export * from './Authorization.service';
export * from './AuthRolePermission';
export * from './RebirthRole.directive';
export * from './PermissionConfig';

import { AuthorizationService } from './Authorization.service';
import { AuthRolePermission } from './AuthRolePermission';
import { AuthLoginPermission } from './AuthLoginPermission';
import { PermissionConfig } from './PermissionConfig';
import { RebirthRoleDirective } from './RebirthRole.directive';
import { PLATFORM_DIRECTIVES } from '@angular/core';

const AUTH_ROLE_PERMISSIONS_PROVIDERS: any[] = [
    {
        provide: AuthorizationService,
        useClass: AuthorizationService
    },
    {
        provide: AuthRolePermission,
        useClass: AuthRolePermission
    }, {
        provide: AuthLoginPermission,
        useClass: AuthLoginPermission
    },
    { provide: PLATFORM_DIRECTIVES, multi: true, useValue: RebirthRoleDirective }
];

export function providePermission(permissionConfig: PermissionConfig = new PermissionConfig()): any[] {
    return [
        { provide: PermissionConfig, useValue: permissionConfig },
        ...AUTH_ROLE_PERMISSIONS_PROVIDERS
    ];
};
