const averageGrade = (grade1, grade2, grade3, grade4, grade5) => {
    return (grade1 + grade2 + grade3 + grade4 + grade5) / 5
}


let grade = []
const averageGradeV2 = (grade) => {
    let sum = 0
    for (let i = 0; i < grade.length; i++) {
        sum += grade[i];
    }

    return sum = sum / grade.length

}

const getAverageV4 = (...n) => {
    let sumGrade = 0;
    n.map((grade) => {
        sumGrade += grade
    })

    return sumGrade / n.length
}