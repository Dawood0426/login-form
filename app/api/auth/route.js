import { User } from "@/models/user";
import { NextResponse } from "next/server";

 export async function POST(req) {
    
    let data = await req.json()
    console.log(data);

    let newUser = new User;

    newUser.firstName = data.firstName
    newUser.lastName = data.lastName
    newUser.Email = data.Email
    newUser.CompanyName = data.CompanyName
    newUser.password = data.password;

    await  newUser.save();
    console.log("ho raha ha user saved")
    return NextResponse.json({})
     
 }


 export async function PUT(req) {
    const { Email, Password } = await req.json();

    try {
        const user = await User.findOne({ Email });

        if (!user) {
            return NextResponse.json({ error: "User nai mila"  });
        }

        if (user.password !== Password) {
            return NextResponse.json({ error: "Galat Details" , isloggedin : false });
        }

        return NextResponse.json({ message: "Login successful", user , isloggedin : true });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}


export async function GET() {
    try {
        const users = await User.find({});
        return NextResponse.json({
            message: "All users fetched successfully",
            users,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}



