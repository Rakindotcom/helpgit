document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("username");
    const button = document.querySelector("button");
    const resultsDiv = document.getElementById("results");
    const mainDiv = document.querySelector(".main");
  
    button.addEventListener("click", async () => {
      const username = input.value.trim();
  
      if (!username) {
        resultsDiv.innerHTML = "<p>Please enter a username.</p>";
        return;
      }
  
      const url = `https://api.github.com/search/users?q=${username}`;
  
      try {
        resultsDiv.innerHTML = "<p>Loading...</p>"; 
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error("Failed to fetch data from GitHub.");
        }
  
        const data = await response.json();
  
        if (data.total_count === 0) {
          resultsDiv.innerHTML = "<p>No users found.</p>";
          mainDiv.classList.remove("active");
        } else {
          let output = '<h2>Found Result:</h2>';
          data.items.forEach(user => {
            output += `
              <div>
                <img src="${user.avatar_url}" alt="Avatar" width="50">
                <a href="${user.html_url}" target="_blank">${user.login}</a>
              </div>`;
          });
  
          resultsDiv.innerHTML = output;
          mainDiv.classList.add("active");
        }
      } catch (error) {
        console.error(error);
        resultsDiv.innerHTML = "<p>Error fetching users. Please try again later.</p>";
        mainDiv.classList.remove("active");
      }
    });
  });
  