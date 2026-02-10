import User from "../dbModels/User.js";


const initAdmin = async () => {
  try {
    const exists = await User.findOne();

    if (exists) {
      console.log("✅ Admin already initialized");
      return;
    }

    await User.create({
      name: "Author",
      email: "admin@gmail.com",
      role: "Admin",
    });

    console.log("🚀 Default Admin Created.");
  } catch (error) {
    console.error("❌ Admin settings init error:", error);
  }
};

export default initAdmin;
