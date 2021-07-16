import React, { useEffect } from 'react';

const Quiz = () => {

    console.log("working");

    useEffect(() => {
        getData();
    });

    function getData() {

        const url = 'https://opentdb.com/api.php?amount=1&category=18&type=multiple';

        const o1 = document.getElementById('o1');
        const i1 = document.getElementById('i1');
        const o2 = document.getElementById('o2');
        const i2 = document.getElementById('i2');
        const o3 = document.getElementById('o3');
        const i3 = document.getElementById('i3');
        const o4 = document.getElementById('o4');
        const i4 = document.getElementById('i4');
        const ques = document.querySelector('h3');

        fetch(url).then((response) => response.json()).then((data) => {
            let res = data.results[0];
            console.log(res);
            ques.innerHTML = res.question;
            o1.innerHTML = res.incorrect_answers[0];
            i1.value = res.incorrect_answers[0];
            o2.innerHTML = res.incorrect_answers[1];
            i2.value = res.incorrect_answers[1];
            o3.innerHTML = res.incorrect_answers[2];
            i3.value = res.incorrect_answers[2];
            o4.innerHTML = res.correct_answer;
            i4.value = res.correct_answer;
        });
    }

    function myForm() {
        let o1 = document.getElementById("o1").innerText;
        let o2 = document.getElementById("o2").innerText;
        let o3 = document.getElementById("o3").innerText;
        let o4 = document.getElementById("o4").innerText;
        let answer = o4;
        alert(`Correct answer is :: ${answer}`);
        let score = 'INCORRECT';
        let gender = document.getElementsByName('gender');
        if (gender[0].checked) {
            let option1 = o1;
            if (option1 === answer) {
                score = 'CORRECT';
            }
        } else if (gender[1].checked) {
            let option2 =o2;
            if (option2 === answer) {
                score = 'CORRECT';
            }
        } else if (gender[2].checked) {
            let option3 = o3;
            if (option3 === answer) {
                score = 'CORRECT';
            }
        } else {
            //let option4 = gender[3].value;
            let option4 = o4;
            if (option4 === answer) {
                score = 'CORRECT';
            }
        }
        alert(`You select ${score} answer!`);
    }

    return (
        <>
            <div className="container my-4">
                <h1 className='alert alert-primary text-center'>Welcome To Magic Quiz Competition</h1>
                <div className="box mt-5 shadow">
                    <hr />
                    <form onSubmit={myForm}>
                        <h3>Loading...</h3>
                        <input type="radio" id="i1" name="gender" value="male" />
                        <p>
                            A. <span id="o1" className='text-white'>...</span>
                        </p>
                        <input type="radio" id="i2" name="gender" value="female" />
                        <p>
                            B. <span id="o2" className='text-white'>...</span>
                        </p>
                        <input type="radio" id="i3" name="gender" value="others" />
                        <p>
                            C. <span id="o3" className='text-white'>...</span>
                        </p>
                        <input type="radio" id="i4" name="gender" value="prefer not to say" />
                        <p>
                            D. <span id="o4" className='text-white'>...</span>
                        </p>
                        <button type="submit" className='btn btn-success mb-4'>Check</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Quiz;
