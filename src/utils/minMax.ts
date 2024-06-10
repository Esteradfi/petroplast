export default function findMinMaxVolume(arr: any) {
    if (arr.length === 0) {
        return [null, null];
    }

    return arr.reduce((acc: any, cur: any) => {
        return [
            acc[0] !== null ? Math.min(+acc[0], +cur.volume) : +cur.volume,
            acc[1] !== null ? Math.max(+acc[1], +cur.volume) : +cur.volume
        ];
    }, [null, null]);
}
