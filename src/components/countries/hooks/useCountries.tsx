import { useQuery } from 'react-query';

import { useCallback } from 'react';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { IQueryParams } from '../../../models/common';
import { ICountries } from '../../../models/country';

async function getCountries(): Promise<ICountries[]> {
    const url = `/countries`;

    const { data } = await axiosInstance.get(url);
    return data;
}

export function useCountries({ searchQuery }: IQueryParams): {
    data: ICountries[];
    isFetching: boolean;
} {
    const fallback: ICountries[] = [];
    const searchQCapitilized = searchQuery
        ? searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
        : searchQuery;

    const selectFn = useCallback(
        (data: ICountries[]) =>
            data.filter((country) => country.name.includes(searchQCapitilized)),
        [searchQCapitilized]
    );

    // we are fetching all the countries name and caching them
    // as we need this data to implement our custom search
    // fuzzy search or search for non-capitilized letter is not supported by api right now
    const { data = fallback, isFetching } = useQuery(
        [queryKeys.countries],
        () => getCountries(),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            select: searchQuery ? selectFn : undefined
        }
    );

    return { data, isFetching };
}
