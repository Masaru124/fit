const foodData = {
    apple: { calories: 95 },
    banana: { calories: 105 },
    chicken: { calories: 165 },
};

const exerciseData = {
    running: 300, // calories per hour
    cycling: 250,
    swimming: 400,
};

document.getElementById('foodSelector').addEventListener('change', function() {
    const selectedFood = this.value;
    const calorieInfo = document.getElementById('calorieInfo');
    
    if (foodData[selectedFood]) {
        calorieInfo.innerText = `Calories: ${foodData[selectedFood].calories}`;
    } else {
        calorieInfo.innerText = '';
    }
});

document.getElementById('calculateCalories').addEventListener('click', function() {
    const selectedExercise = document.getElementById('exerciseSelector').value;
    const duration = parseFloat(document.getElementById('duration').value);
    const exerciseCalorieInfo = document.getElementById('exerciseCalorieInfo');
    
    if (exerciseData[selectedExercise] && duration > 0) {
        const caloriesBurned = (exerciseData[selectedExercise] / 60) * duration; // Calories burned
        exerciseCalorieInfo.innerText = `Calories Burned: ${caloriesBurned.toFixed(2)}`;
    } else {
        exerciseCalorieInfo.innerText = '';
    }
});
