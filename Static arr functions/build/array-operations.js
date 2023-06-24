// New super class:
class arrayOperations {
    // Display the sum of all numbers:
    static getSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    // Display the average value:
    static getAvg(arr) {
        let sum = arrayOperations.getSum(arr);
        let avg = sum / arr.length;
        return avg;
    }
    // Show the largest number in the array:
    static getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    // Show the smallest number in the array:
    static getMin(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}
// Export and use in the main file:
export default arrayOperations;
