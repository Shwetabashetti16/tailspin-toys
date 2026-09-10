/*
 * Publisher data access helpers for the Tailspin Toys catalog.
 * These queries read publisher names from the local SQLite database so Astro pages
 * can render the available publishing options without a separate backend API.
 */

import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves every publisher ordered alphabetically by name.
 *
 * @param db - Database connection used to query the publishers table.
 * @returns A list of publishers containing the id and name fields, sorted by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
