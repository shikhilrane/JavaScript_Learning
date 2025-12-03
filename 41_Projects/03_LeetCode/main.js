document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");

    // **Fix class selectors with corrected class names**
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    // Validate username with regex
    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const targeturl = "https://leetcode.com/graphql";
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: `
                    query userSessionProgress($username: String!) {
                        allQuestionsCount {
                            difficulty
                            count
                        }
                        matchedUser(username: $username) {
                            submitStats {
                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                                totalSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                            }
                        }
                    }
                `,
                variables: { username: username }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };

            const response = await fetch(proxyUrl + targeturl, requestOptions);
            if (!response.ok) {
                throw new Error("Unable to fetch user details");
            }
            const parsedData = await response.json();
            console.log("Logging data:", parsedData);

            displayUserData(parsedData);
        } catch (error) {
            statsContainer.innerHTML = `<p>No data found</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressPercent = (solved / total) * 100;
        // Set CSS variable as percentage string with % sign
        circle.style.setProperty("--progress-degree", `${progressPercent}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData) {
        // Fix capitalization: submitStats, not submitstats
        const allQuestionsCount = parsedData.data.allQuestionsCount;
        const matchedUser = parsedData.data.matchedUser;

        if (!matchedUser) {
            statsContainer.innerHTML = `<p>No user found.</p>`;
            return;
        }

        const totalEasyQuestions = allQuestionsCount.find(q => q.difficulty === "Easy").count;
        const totalMediumQuestions = allQuestionsCount.find(q => q.difficulty === "Medium").count;
        const totalHardQuestions = allQuestionsCount.find(q => q.difficulty === "Hard").count;

        const solvedStats = matchedUser.submitStats.acSubmissionNum;

        const solvedEasy = solvedStats.find(q => q.difficulty === "Easy").count;
        const solvedMedium = solvedStats.find(q => q.difficulty === "Medium").count;
        const solvedHard = solvedStats.find(q => q.difficulty === "Hard").count;

        updateProgress(solvedEasy, totalEasyQuestions, easyLabel, easyProgressCircle);
        updateProgress(solvedMedium, totalMediumQuestions, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHard, totalHardQuestions, hardLabel, hardProgressCircle);
    }

    searchButton.addEventListener("click", function () {
        const username = usernameInput.value;
        console.log("Logging username:", username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
