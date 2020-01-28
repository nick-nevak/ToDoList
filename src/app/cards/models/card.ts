import { Priority } from './priority';
import { Color } from './color';

export interface Card {
    id: number;
    name: string;
    description: string;
    status: boolean;
    date: Date;
    priorityID: number;
    colorID: number;
}