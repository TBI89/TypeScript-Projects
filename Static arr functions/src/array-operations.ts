
// New super class:
class arrayOperations {

    // Display the sum of all numbers:
    public static getSum(arr: number []): number {
        let sum: number = 0;
        for (let i: number = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // Display the average value:
    public static getAvg(arr: number []): number {
        let sum: number = arrayOperations.getSum(arr);
        let avg = sum / arr.length;
        return avg;
    }

    // Show the largest number in the array:
    public static getMax(arr: number []): number {
        let max: number = arr[0];
        for(let i: number = 1; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    // Show the smallest number in the array:
    public static getMin(arr: number []): number {
        let min: number = arr[0];
        for(let i: number = 1; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
    
}

// Export and use in the main file:
export default arrayOperations;