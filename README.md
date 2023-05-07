# Convoisseur

## Inspiration ⭐

After the pandemic, the social skills of people around the world have degraded as peer to peer interactions were getting less and less common. Additionally, we see an ever increasing demand for people who are looking to improve their conversation skills: from English learners, to students, to those with social anxiety 

## What it does 🖥️

The user is able to enter their name, as well as a type of conversation they'd like to have, such as a friend conversation, an interview, or a date. The AI will then specialize and open with a conversation that is relevant to the required specification. The user and AI can then continue to talk until the user terminates the chat. Upon terminating the chat, the AI gives some good things the user did during their conversation, as well as some bad things they did. Finally, we rate the user's conversation out of 5 stars, and prompt for another conversation if the user desires, so they can keep practicing and improving on their skills.

## How we built it 🛠️

We built our application using ReactJS (frontend) and Flask (backend). For the API, we used the Cohere API to get our prompt outputs. We implemented version control using Git and Github.

## Challenges we ran into 🤔

We initially had issues involving CORS, which we resolved using appropriate configurations to our backend framework. Additionally, we ran into issues in trying to sandbox the AI bot, but we thoroughly experimented with our application and refined our inputs and outputs so that it provides the most relevant information possible.

## Accomplishments that we're proud of 🏆

We set up a dynamically changing chat thread which displays the interaction between the user and AI, and we have had many fruitful conversations with it. The AI also gives insightful feedback on how the conversation went upon terminating the chat process, which we found made our application very unique.

## What we learned 🧠

We learned quite a few things on dynamically changing webpages, including how to get the most out of React and states. Using the Cohere API, we also learned about sandboxing and more effectively harnessed the power of natural language processing through our code.

## What's next for Convoisseur 🔮

We would like to set up user accounts, where previous chat threads are saved, as well as include a dashboard on the quantifiable progress a user makes in terms of their conservation skills.
