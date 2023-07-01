function partition(arr: number[], low: number, high: number): number {
    // pick the last element as pivot
    const pivot = arr[high];
    // this is going to be -1 at the beginning so we need to add 1 before using it(swapping)
    let to_swap = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] < pivot) {
            to_swap++;
            const tmp = arr[to_swap];
            arr[to_swap] = arr[i];
            arr[i] = tmp;
        }
    }
    // swap between i+1 and high
    const tmp = arr[to_swap + 1];
    arr[to_swap + 1] = arr[high];
    arr[high] = tmp;

    return to_swap + 1;
}


export default function quick_sort(arr: number[]): void {
    const low = 0;
    const high = arr.length - 1;
    quick_sort_aux(arr, low, high);
}


function quick_sort_aux(arr: number[], low: number, high: number): void {
    if (low > high) {
        return;
    }

    const pivot = partition(arr, low, high);


    quick_sort_aux(arr, low, pivot - 1);
    quick_sort_aux(arr, pivot + 1, high);
}
