import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import { pageSize, queryKeys } from '../../../react-query/constants';
import { IQueryParams } from '../../../models/common';
import { ICity } from '../../../models/city';

async function getStates({
    pageNumber = 0,
    limit = pageSize,
    selectedStateCode
}: IQueryParams): Promise<ICity[]> {
    const url = `/cities?state_code=${selectedStateCode}&_page=${pageNumber}&_limit=${limit}`;

    const { data } = await axiosInstance.get(url);
    return data;
}

export function useCities({
    pageNumber = 0,
    limit = pageSize,
    selectedStateCode
}: IQueryParams): {
    data: ICity[];
    isFetching: boolean;
} {
    const fallback: ICity[] = [];

    const { data = fallback, isFetching } = useQuery(
        [queryKeys.cities, selectedStateCode],
        () =>
            getStates({
                pageNumber,
                limit,
                selectedStateCode
            }),
        {
            keepPreviousData: false
        }
    );

    return { data, isFetching };
}
