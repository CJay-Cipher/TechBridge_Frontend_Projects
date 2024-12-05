const student = {
    first_name: "Zaram",
    last_name: "Chi",
    user_age: 16,
    nationality: "Nigeria",
    subjects: ["English", "Mathematics", "Geography"],
    data: {
        0: "cat is all about abc",
        1: "I love to play with cat",
        2: "Cats are Ugly",
        3: [
            "man",
            "woman",
            {
                key1: "happy",
                key2: "sad", // access this value
                key3: "funny",
            },
        ],
    },
};

const getStudentName = () => {
    return new Promise((resolve, reject) => {
        try {
            // output = student.subjects;
            console.log("Getting the student subjects");
            setTimeout(() => {
                if (output !== undefined) {
                    resolve(`Student subjects: ${output.join(", ")}`);
                } else {
                    reject("Subject not found");
                }
            }, 2000);
        } catch (error) {
            reject(new Error("Error 400"));
        }
    });
};

getStudentName()
    .then((subjects) => {
        console.log(subjects);
    })
    .catch((err) => {
        console.log(err);
    });
