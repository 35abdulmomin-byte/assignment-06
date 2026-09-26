export interface Workout {
  id: number;
  name: string;
  description: string;
  image: string;
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number; // in minutes
  caloriesBurned: number; // in kcal
  rating: number;
  muscleGroups: string[];
  instructions: string[];
}

export const workoutsData: Workout[] = [
  {
    id: 1,
    name: "BARBELL BENCH PRESS",
    description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    sets: 4,
    reps: "6-8",
    duration: 25,
    caloriesBurned: 180,
    rating: 4.8,
    muscleGroups: ["CHEST", "ARMS"],
    instructions: [
      "Lie flat on the bench and grip the barbell slightly wider than shoulder-width.",
      "Unrack the bar and lower it smoothly to your mid-chest level.",
      "Press the bar upward explosively until your arms are fully extended.",
      "Maintain a slight arch in your lower back and keep shoulders pinned down."
    ]
  },
  {
    id: 2,
    name: "DUMBBELL BICEP CURL",
    description: "Isolates the biceps to maximize arm strength and muscle peak development.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    equipment: "Dumbbells",
    difficulty: "Beginner",
    sets: 3,
    reps: "10-12",
    duration: 15,
    caloriesBurned: 110,
    rating: 4.6,
    muscleGroups: ["ARMS"],
    instructions: [
      "Stand upright holding a dumbbell in each hand at arm's length.",
      "Keep elbows close to your torso and rotate palms facing forward.",
      "Curl the weights while contracting biceps until fully contracted.",
      "Slowly lower the dumbbells back to starting position."
    ]
  },
  {
    id: 3,
    name: "BARBELL SQUAT",
    description: "The king of lower body movements for building massive quad, hamstring, and glute strength.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    equipment: "Barbell, Squat Rack",
    difficulty: "Advanced",
    sets: 4,
    reps: "5-8",
    duration: 30,
    caloriesBurned: 240,
    rating: 4.9,
    muscleGroups: ["LEGS", "CORE"],
    instructions: [
      "Rest the barbell across your upper back and traps.",
      "Hinge at hips and bend knees to lower down until thighs are parallel to ground.",
      "Drive firmly through heels to return to standing position.",
      "Keep chest lifted and core engaged throughout."
    ]
  },
  {
    id: 4,
    name: "LAT PULLDOWN",
    description: "Builds upper back width and v-taper width using vertical cable pull resistance.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop",
    equipment: "Cable Machine",
    difficulty: "Beginner",
    sets: 4,
    reps: "10-12",
    duration: 20,
    caloriesBurned: 140,
    rating: 4.7,
    muscleGroups: ["BACK", "ARMS"],
    instructions: [
      "Sit at the pulldown machine and adjust thigh pad for security.",
      "Grip bar with hands wider than shoulder width.",
      "Pull bar down towards upper chest while squeezing shoulder blades.",
      "Slowly return bar to full arm extension."
    ]
  },
  {
    id: 5,
    name: "RUSSIAN TWIST",
    description: "Dynamic rotational core exercise for building strong, defined obliques and rotational stability.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    equipment: "Medicine Ball / Weight Plate",
    difficulty: "Intermediate",
    sets: 3,
    reps: "15-20",
    duration: 12,
    caloriesBurned: 95,
    rating: 4.5,
    muscleGroups: ["CORE"],
    instructions: [
      "Sit on floor with knees bent and feet slightly elevated.",
      "Lean back at a 45-degree angle holding weight at chest.",
      "Twist torso side-to-side bringing weight toward floor on each side.",
      "Keep movement controlled with core engaged."
    ]
  },
  {
    id: 6,
    name: "OVERHEAD DUMBBELL PRESS",
    description: "Develops broad shoulders and upper body overhead pushing power.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    sets: 4,
    reps: "8-10",
    duration: 22,
    caloriesBurned: 150,
    rating: 4.7,
    muscleGroups: ["SHOULDERS", "ARMS"],
    instructions: [
      "Hold dumbbells at shoulder height with palms facing forward.",
      "Press weights upward until arms are extended overhead.",
      "Pause briefly at top without locking elbows hard.",
      "Lower dumbbells steadily back to shoulder level."
    ]
  },
  {
    id: 7,
    name: "CONVENTIONAL DEADLIFT",
    description: "Full-body strength builder targeting posterior chain, back strength, and grip power.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    equipment: "Barbell",
    difficulty: "Advanced",
    sets: 3,
    reps: "5",
    duration: 35,
    caloriesBurned: 280,
    rating: 4.9,
    muscleGroups: ["BACK", "LEGS"],
    instructions: [
      "Stand with midfoot under barbell, feet hip-width apart.",
      "Hinge down and grip bar just outside knees.",
      "Drive hips forward while pulling chest up to lock out standing.",
      "Lower bar safely under control back to ground."
    ]
  },
  {
    id: 8,
    name: "TRICEPS ROPE PUSHDOWN",
    description: "Isolates outer and lateral heads of triceps for arm lockout strength.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
    equipment: "Cable Machine, Rope Attachment",
    difficulty: "Beginner",
    sets: 3,
    reps: "12-15",
    duration: 15,
    caloriesBurned: 100,
    rating: 4.6,
    muscleGroups: ["ARMS"],
    instructions: [
      "Attach rope to high pulley, grip ends with palms facing.",
      "Pin elbows to sides and push rope down towards thighs.",
      "Spread rope ends apart at bottom of movement.",
      "Slowly return to elbow bend position."
    ]
  },
  {
    id: 9,
    name: "INCLINE DUMBBELL PRESS",
    description: "Targets upper chest mass and upper chest shoulder integration.",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
    equipment: "Incline Bench, Dumbbells",
    difficulty: "Intermediate",
    sets: 4,
    reps: "8-10",
    duration: 20,
    caloriesBurned: 160,
    rating: 4.8,
    muscleGroups: ["CHEST", "SHOULDERS"],
    instructions: [
      "Set bench to a 30-45 degree incline and hold dumbbells at chest.",
      "Press dumbbells straight up above upper chest.",
      "Lower under control until dumbbells reach chest level.",
      "Press back up maintaining shoulder stability."
    ]
  },
  {
    id: 10,
    name: "HAMSTRING LEG CURL",
    description: "Isolation movement focusing directly on knee flexion and hamstring development.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
    equipment: "Leg Curl Machine",
    difficulty: "Beginner",
    sets: 3,
    reps: "12",
    duration: 18,
    caloriesBurned: 120,
    rating: 4.5,
    muscleGroups: ["LEGS"],
    instructions: [
      "Adjust machine pad to rest on lower calves.",
      "Curl legs upward towards glutes fully contracting hamstrings.",
      "Pause at top squeeze position.",
      "Lower pad back steadily."
    ]
  },
  {
    id: 11,
    name: "PLANK HOLD",
    description: "Isometric core stability movement targeting deep abs and spinal support.",
    image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?q=80&w=800&auto=format&fit=crop",
    equipment: "Mat",
    difficulty: "Beginner",
    sets: 3,
    reps: "60 seconds",
    duration: 10,
    caloriesBurned: 80,
    rating: 4.4,
    muscleGroups: ["CORE"],
    instructions: [
      "Place forearms on ground aligned under shoulders.",
      "Extend legs behind with toes pinned to floor.",
      "Keep body in straight line from head to heels.",
      "Hold tight abs without letting hips sag."
    ]
  },
  {
    id: 12,
    name: "CABLE LATERAL RAISE",
    description: "Isolates side deltoids to create shoulder width and broad silhouette.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    equipment: "Cable Machine",
    difficulty: "Intermediate",
    sets: 4,
    reps: "12-15",
    duration: 16,
    caloriesBurned: 105,
    rating: 4.7,
    muscleGroups: ["SHOULDERS"],
    instructions: [
      "Set cable pulley to lowest position and attach handle.",
      "Pull cable across body lifting arm out to side.",
      "Raise until hand reaches shoulder level height.",
      "Lower under steady tension."
    ]
  }
];