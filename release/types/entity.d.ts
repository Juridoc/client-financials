/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Profiles from '@juridoc/client-profiles';
import * as Documents from '@juridoc/client-documents';
import * as Types from './types';
/**
 * Financial entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Financial Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context entity.
     */
    context: Documents.Entity;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Financial type.
     */
    type: Types.Common;
}
