import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

//make your secret
const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

//encrypt yout dat
export async function encrypt(payload: any){
    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('20 seconds')
    .sign(key)
}

//decrypt your data
export async function decrypt(input: string): Promise<any> {
    const {payload} = await jwtVerify(input, key, {algorithms:['HS256'],}); 
    return payload
}
