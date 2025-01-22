function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length;
    const n = isWater[0].length;
    let q: [number, number][] = []

    for(let i = 0; i<m; i +=1){
        for(let j = 0; j<n; j+=1) {
            if(isWater[i][j]) {
                isWater[i][j] = 0
                q.push([i, j])
            } else {
                isWater[i][j] = -1
            }
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    // Multi source BFS
    while(q.length) {
        const tmpQ: [number, number][] = []
        for(const mem of q) {
            for(const direction of directions) {
                const newX = mem[0] + direction[0]
                const newY = mem[1] + direction[1]

                if(newX>=0 && newX<m && newY>=0 && newY<n && isWater[newX][newY] === -1) {
                    // find min value
                    isWater[newX][newY] = isWater[mem[0]][mem[1]] + 1
                    tmpQ.push([newX, newY])
                }
            }
        }
        q = [...tmpQ]
    }
    return isWater
};