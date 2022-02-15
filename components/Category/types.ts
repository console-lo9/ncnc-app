import { DealItemProps } from 'components/Deal/types';
import { conCategory1s } from 'types/categoryListTypes';
import { conCategory1 } from 'types/categoryTypes';

export interface CategoryProps {
    categories: conCategory1 | null;
    categoryList: conCategory1s[];
    id: number;
    conItems: DealItemProps[];
}
