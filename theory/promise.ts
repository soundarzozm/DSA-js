// Promise takes executor function
// This function runs immediately and takes two arguments - resolve and reject

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    // If operation is successful, call resolve with data
    resolve("Operation successful!");
  } else {
    // If operation fails, call reject with an error
    reject(new Error("Something went wrong."));
  }
});

myPromise
  .then((data) => {
    console.log("Success:", data); // Prints: Success: Operation successful!
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Cleanup complete."); // Runs either way
  });

// ---------------------------------------------------Promise chaining---------------------------------------------------
getUser(userId)
  .then((user) => {
    console.log(`User found: ${user.name}`);
    return getPosts(user.id); // Returns a new Promise
  })
  .then((posts) => {
    console.log(`Found ${posts.length} posts`);
    return getComments(posts[0].id); // Returns another Promise
  })
  .then((comments) => {
    console.log("Top comment:", comments[0]);
  })
  .catch((error) => {
    // Catches errors from ANY step in the chain above
    console.error("Chain broken:", error);
  });

// Promise.all([p1, p2])
// What: Waits for all promises to resolve. If one fails, the whole thing fails immediately.
// When: You need data from 3 different APIs before the page can load.
//
// Promise.allSettled([p1, p2])
// What: Waits for all to finish, regardless of success or failure. Returns an array of status objects.
// When: You want to show results for whatever succeeded, ignoring failures.
//
// Promise.race([p1, p2])
// Returns the result of the first promise to settle (win or lose).
// A timeout feature: Race a fetch request against a 5-second timer.

// Introduced in ES2017, async and await are "syntactic sugar" built on top of Promises.
// They make asynchronous code look and behave like synchronous code, which is much easier to read.
async function showUserComments(userId: string) {
  try {
    const user = await getUser(userId); // Waits here
    console.log(`User found: ${user.name}`);

    const posts = await getPosts(user.id); // Waits here
    console.log(`Found ${posts.length} posts`);

    const comments = await getComments(posts[0].id); // Waits here
    console.log("Top comment:", comments[0]);
  } catch (error) {
    // Replaces .catch()
    console.error("Something went wrong:", error);
  }
}

// 1. Callback hell
// 2. Promises
// 3. async/await
//
// The Pyramid of Doom
loginUser("john_doe", (error, userId) => {
  if (error) {
    console.error("Login failed:", error);
  } else {
    // We are now inside the first callback
    getUserData(userId, (error, userData) => {
      if (error) {
        console.error("Failed to get user:", error);
      } else {
        // We are now inside the second callback
        getExclusiveContent(userData.isPremium, (error, content) => {
          if (error) {
            console.error("Failed to get content:", error);
          } else {
            // Finally, we can use the data!
            console.log("Here is the content:", content);
          }
        });
      }
    });
  }
});

// Promises
loginUser("john_doe")
  .then((userId) => {
    // Step 1 done. Return the next Promise.
    return getUserData(userId);
  })
  .then((userData) => {
    // Step 2 done. Return the next Promise.
    return getExclusiveContent(userData.isPremium);
  })
  .then((content) => {
    // Step 3 done. Success!
    console.log("Here is the content:", content);
  })
  .catch((error) => {
    // ONE catch block handles errors from ANY step above
    console.error("Something went wrong:", error);
  });

// Async/Await
async function showContent() {
  try {
    const userId = await loginUser("john_doe");
    const userData = await getUserData(userId);
    const content = await getExclusiveContent(userData.isPremium);

    console.log("Here is the content:", content);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

showContent();
