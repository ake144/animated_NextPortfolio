import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

function convertBigIntsToStrings(data) {
  // Recursively convert BigInt values to strings
  const convert = (value) => {
    if (typeof value === 'bigint') {
      return value.toString();
    } else if (typeof value === 'object') {
      for (const key in value) {
        value[key] = convert(value[key]);
      }
    }
    return value;
  };

  return convert(data);
}

export async function GET() {
  const posts = await prisma.portfolio.findMany({});

  // Convert BigInt values to strings before sending the JSON response
  const postsWithStringBigInts = convertBigIntsToStrings(posts);

  return NextResponse.json(postsWithStringBigInts);
}

// export async function POST(request) {
//   const body = await request.json();
//   const { title, desc, color, link, img } = body;

//   const newPost = await prisma.portfolio.create({
//     data: {
//       title,
//       desc,
//       color,
//       link,
//       img,
//     },
//   });

//   // Convert BigInt values to strings before sending the JSON response
//   const newPostWithStringBigInts = convertBigIntsToStrings(newPost);

//   return NextResponse.json({
//     success: 1,
//     message: 'create success',
//     post: newPostWithStringBigInts,
//   });
// }
