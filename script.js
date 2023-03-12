function toggle(checkbox) {
  switch (checkbox) {
    case "allPosts":
      let allPosts = document.querySelector(".published");
      allPosts.classList.toggle("hide");
      let allPostsClassToggled = allPosts.classList.contains("hide");
      setLocalStorage(checkbox, allPostsClassToggled);
      break;
    case "postLikes":
      let postLikes = document.querySelector(".like-button-container");
      postLikes.classList.toggle("hide");
      let postLikesClassToggled = postLikes.classList.contains("hide");
      setLocalStorage(checkbox, postLikesClassToggled);
      break;
    case "postViews":
      let postViews = document.querySelector(".post-stats.big");
      postViews.classList.toggle("hide");
      let postViewsClassToggled = postViews.classList.contains("hide");
      setLocalStorage(checkbox, postViewsClassToggled);
      break;
    case "postOpenRates":
      let postOpenRates = document.querySelector(".post-stats");
      postOpenRates.classList.toggle("hide");
      let postOpenRatesClassToggled = postOpenRates.classList.contains("hide");
      setLocalStorage(checkbox, postOpenRatesClassToggled);
      break;
    case "postLinkClicks":
      let postLinkClicks = document.querySelector(".post-links");
      postLinkClicks.classList.toggle("hide");
      let postLinkClicksClassToggled =
        postLinkClicks.classList.contains("hide");
      setLocalStorage(checkbox, postLinkClicksClassToggled);
      break;
    case "trafficSources":
      let trafficSources = document.querySelector(".referrer-sources");
      trafficSources.classList.toggle("hide");
      let trafficSourcesClassToggled =
        trafficSources.classList.contains("hide");
      setLocalStorage(checkbox, trafficSourcesClassToggled);
      break;
    case "subscribersTab":
      let subscribersTabXpath = "//span[text()='Subscribers']";
      let subscribersTab = document.evaluate(
        subscribersTabXpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      subscribersTab.classList.toggle("hide");
      let subscribersTabClassToggled =
        subscribersTab.classList.contains("hide");
      setLocalStorage(checkbox, subscribersTabClassToggled);
      break;
    case "statsTab":
      let statsTabXpath = "//span[text()='Stats']";
      let statsTab = document.evaluate(
        statsTabXpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      statsTab.classList.toggle("hide");
      let statsTabClassToggled = statsTabXpath.classList.contains("hide");
      setLocalStorage(checkbox, statsTabClassToggled);
  }
}

function checkLocalStorage() {
  let toggles = { ...localStorage };
  console.log(toggles);
  for (let key in toggles) {
    if (toggles[key] === "true") {
      setClassOnExtensionLoad(key);
    }
  }
}

function setLocalStorage(checkbox, classToggled) {
  window.localStorage.setItem(checkbox, classToggled);
}

function setClassOnExtensionLoad(key) {
  switch (key) {
    case "allPosts":
      let allPosts = document.querySelector(".published");
      allPosts.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "postLikes":
      let postLikes = document.querySelector(".like-button-container");
      postLikes.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "postViews":
      let postViews = document.querySelector(".post-stats.big");
      postViews.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "postOpenRates":
      let postOpenRates = document.querySelector(".post-stats");
      postOpenRates.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "postLinkClicks":
      let postLinkClicks = document.querySelector(".post-links");
      postLinkClicks.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "trafficSources":
      let trafficSources = document.querySelector(".referrer-sources");
      trafficSources.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "subscribersTab":
      let subscribersTabXpath = "//span[text()='Subscribers']";
      let subscribersTab = document.evaluate(
        subscribersTabXpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      subscribersTab.classList.add("hide");
      setLocalStorage(key, true);
      break;
    case "statsTab":
      let statsTabXpath = "//span[text()='Stats']";
      let statsTab = document.evaluate(
        statsTabXpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      statsTab.classList.add("hide");
      setLocalStorage(key, true);
  }
}

checkLocalStorage();
