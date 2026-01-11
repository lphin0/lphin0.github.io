---
title: "The Beginning of The Journey"
date: 2026-01-11
summary: "A story of hubris, failure, learning, and acceptance."
type: "blog"
---

## Ever since I was in high school,

if there's one thing that has remained constant, it's that I really, really want to make games.

It's a feeling that just will not leave me alone. For a long time, I've carried this urge. I've started plenty of personal projects over the years, trying to learn engines or grasp game design, but they usually fade out. One screen, thirty seconds of gameplay, and then the spark just dies. I'd get bored of it because the gameplay idea was a dead end instead of trying to make it work. I'd start a refactor because I slapped things together haphazardly and then give up because it was too much of a mess. Some barely even left the concept stage because I decided that it was "just too much work for one guy".

But after playing Clair Obscur: Expedition 33 and digging into the story behind it, something finally clicked. I found out that the lead director had left Ubisoft to form a new studio with two industry friends. But what really struck me was how they built the rest of the team. They found their composer on a forum via a SoundCloud link, their art director on ArtStation, and their lead writer through a Reddit demo casting call.

That kick-off team was only six people strong. Yes, they have publisher backing now, but seeing that mix of professional experience and raw talent plucked from the internet shook me. It made me finally decide to bite the bullet.

> How hard could it be?
> I need to start somewhere anyways.

That's what I told myself. It led me down a path of confusion and self doubt, but looking back, I learned more than I expected.

## The Concept

When I started planning, I didn't want to reinvent the wheel. I wanted to fuse the games I was obsessing over, a mix between Vampire Survivors and the chaotic energy of Devil Daggers or Ultrakill.

A huge part of this was a test of ego. I wanted to see how far I could get entirely on my own. No one helping with code. No one handling graphics or game design. Just me and the screen.

From that obsession, DATAVOLVER was born.

My framework was simple:
-   Vampire Survivors style gameplay loop.
-   Devil Daggers style arena.
-   Ultrakill style movement, or at least a dash.

My logic was to "casualize" the high intensity loops of Ultrakill and Devil Daggers. As much as I love them, they are brutal for the average person. I figured adding leveling up mechanics, removing the One Hit Kill rule, and simplifying the movement tech would make it accessible. I'm not trying to fix those games because I love them, but I wanted to see what a softer version would feel like.

I've dabbled in drawing and music over the years, though I haven't mastered them yet. Accepting this, I decided to make something visually simple that relied as little as possible on traditional artistic talent. I wanted to approach this purely from a "gameplay first" angle.

## The Toolbox

With the concept locked, it was time to pick a tool. Since I'm going solo, picking the right engine felt critical.

Unity and Unreal were the obvious names. With Unity, I had recently switched to using Linux full time, specifically Fedora, and their support was a nightmare. The pricing controversy was the final nail in the coffin. Unreal feels like overkill for a one person production.

I have a lot of experience with MonoGame. It's fantastic for 2D, but it is really not suited for 3D, and I really wanted something with an actual editor this time.

Fortunately, Godot was really picking up steam around then. I gave it a shot, and it was perfect for quickly prototyping. I picked the GDScript version since the docs recommended it, though I'm already eyeing C# for the next one.

GDScript is actually nice. Just having static typing made me feel at home. The API is intuitive, and the scene based structure is brilliant. It makes object creation and instantiation in code feel almost effortless.

However, I really don't like that it's interpreted. Game code is easily extractable, and there's a performance floor based on the engine itself. This is the primary reason I want to switch to C# and NativeAOT later.

## The Month I Lost

I need to record this failure because it taught me a lot.

I tried to learn shaders by using LLMs to write them for me. I don't know graphics programming. I thought the AI could bridge the gap.

It was a month of garbage. Garbage that I couldn't debug because I didn't understand why it was garbage in the first place. I would ask for a glow effect and get a seizure inducing mess. I would ask for outlines and objects would disappear.

The problem was I had no baseline. I couldn't tell good code from bad code. Eventually, I accepted that a month had passed and I was exactly where I started, no shaders, no knowledge. I wasted that time because I tried to shortcut the learning process.

You still have to do the work.

## Coding with AI

Despite the shader failure, I did start using LLMs for general coding about halfway through the project. By the end, I felt like I was coding in English rather than GDScript.

I found that LLMs are terrible if you give them one prompt and let them run wild. They are far more effective if you provide details of the implementation beforehand and simply let them do the grunt work of writing the syntax.

You just have to be aware of what you actually want in the code itself. Not just the end result of what the code produces.

The more you follow proper software engineering principles, proper compartmentalization and separation of concerns, the better they work. I mostly used the GLM models, Z1 was okay, but 4.5 through 4.7 were incredible, along with the occasional Claude or Grok prompt.

## The Aesthetic

I can't draw. I can't do 3D modeling because Blender still feels like staring at the controls of a spaceship. My artistic comfort zone is basic pixel art.

So, I leaned on procedural generation. Enemies, objects, they are all simple geometric shapes using Godot's defaults. The only exception is the revolver, which I modeled in Blender with some difficulty, and yet it still looks rather basic.

The final result is visually simple. Geometric shapes, cubes and spheres, deformed in various ways. The only "style" comes from an outline shader and giving everything a light source. It makes everything look like it's glowing. It's kind of cool in a retro future way.

## Audio

As for audio, this section is short because there's barely any sound in the game. I ran out of time. I know my way around FamiStudio a bit, but it wasn't enough to compose a proper soundtrack. It was enough to rough in some sound effects, the gunshots, the clink of experience cubes hitting the floor, and the damage sounds. It's sparse, but it works for a prototype.

Another issue I've been unable to resolve so far is that I haven't been able to get 3D audio working at all. Something about how subviewports interact with AudioStreamPlayer3D makes it not work. No matter what I did, it refused to work. As a stopgap workaround I made an approximate distance scaling logic using the 2D audio player. This is one thing I'll need to properly figure out later, but I didn't have the time before my deadline.

## The Feel

Getting a basic arena with floating balls for enemies up and running was fast. That gave me time to tune the movement.

I added a slight momentum system. It gave the character real weight. Then I added a subtle camera tilt when strafing. A little bit of "bobbing" up and down while walking. It started to click for me. Game feel is all about these tiny, invisible details.

There was a specific moment where I stopped testing and started playing. I had just finished polishing the dash and momentum system, and for a solid thirty minutes, I did nothing but jump around the empty arena.

It felt good. I had made a mechanic that actually felt good. It started to feel like something with real potential.

I also played around with a tracking system for the bullets. Initially, I added it to make the game easier, gently curving projectiles toward targets. But when I expanded the arsenal with a machine gun and a shotgun, things got messy. To differentiate the revolver, I gave it a piercing effect. Combined with tracking, it was a disaster. Bullets would curve, pierce, and curve again. It felt broken.

I pulled back. Now the tracking is barely there, just enough to help the shotgun and machine gun feel a little forgiving. The revolver shoots straight.

I kept adding those little touches:
*   When enemies die, they don't just drop items. They "explode" and rain cubes down.
*   When I deal damage, enemies flash white for 30ms. If they didn't, the game would feel broken.
*   If I play that damage flash before they despawn, rather than just deleting them instantly, it feels infinitely better.

The human brain just loves feedback. It loves knowing that its actions mattered.

## Performance

One of the bigger challenges I ran into was performance. Spawning a large amount of enemies at once, processing them, all of that is quite taxing.

I tried limiting how many enemies are allowed to be alive at once, with a queue system that allows enemies to keep spawning when room is available. That helped the overall performance, but it led to massive stuttering whenever I killed a bunch of enemies at once. The exp drops were not helping matters either.

Once I limited those to spawn 1 to 2 per physics tick, it smoothed things out massively.

2 enemy per tick, 60 ticks a second, 120 enemies per second, more than enough to provide the "feel" without breaking gameplay smoothness.

## The Result

Looking at it now, the game is unfinished. It's rough around the edges. It lacks content, the polish isn't quite there, it's still buggy in some places, and it needs way more audio and visual flair.

I'm really unsatisfied with where I left off.

Yet, at the same time, I feel somewhat proud. I fully expected to get bored of the process and just abandon it completely, but I managed to push through and get something resembling a game out there.

I spent three hours the other day just playing it. Not testing. Playing. And when I stopped thinking about everything that was missing, I realized I was having fun.

It is raw. It is unfinished. But it is mine. And it's a start. The first step has been taken.

If you want to try it out for yourself, you can [download DATAVOLVER here](/files/DATAVOLVER.tar.zst).

## Lessons

You just have to get started. You can read about things, watch videos, and study books all you want. Everything changes when it's put into practice. My experience with software engineering should've told me this, yet I didn't think about it when starting this project.

There was a Twitter trend going on while I was making the game. "Make it exist, then make it good."

You can't make something good without starting somewhere. Unless you're truly talented and experienced, you're not making anything perfect on the first draft.

The culmination of these two points is just to get started. Stop arguing with yourself about how "I'm not good enough to do this yet." You can't get skilled without doing, and nothing exists if you don't do.

## What's Next?

I don't intend on stopping work on this game fully. I'll likely keep working on it in bits and pieces over time as a pet project.

But with how much I learned with just working on this one, I want to try doing another one. This time, a project that spans the whole year of 2026.

I'm doubly inspired to keep learning music and art now. This whole process, frustrating as it was at times, was actually quite a lot of fun too.

I really do hope this is the beginning of a new chapter in my life.

That's all for this one. Have a great rest of your day, and thanks for reading.
