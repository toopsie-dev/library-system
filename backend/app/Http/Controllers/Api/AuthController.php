<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    // Registration
    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if (User::where('email', $request->email)->exists()) {
            return apiResponse(false, 'User already exists with this email', null, 409);
        }

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return apiResponse(true, 'User registered successfully', [
            'user'  => $user,
            'token' => $token
        ]);
    }

    // Login
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return apiResponse(false, 'Invalid credentials', null, 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return apiResponse(true, 'Login successful', [
            'user'  => $user,
            'token' => $token
        ]);
    }

    // Logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return apiResponse(true, 'Logged out successfully', null);
    }

    // Get Authenticated User
    public function me(Request $request)
    {
        return apiResponse(true, 'Authenticated user', $request->user());
    }
}
