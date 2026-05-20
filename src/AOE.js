export async function AOE(array, cback) {
    const zone = array.map(cback);

    return await Promise.all(zone);
}