
function convertBigIntsToStrings(data) {
  // Recursively convert BigInt values to strings
  const convert = (value) => {
    if (typeof value === 'bigint') {
      return value.toString();
    } else if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        value[key] = convert(value[key]);
      }
    }
    return value;
  };

  return convert(data);
}

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request, { params }) {
  const id = params.id;
  if (!id) {
    return NextResponse.error("Missing 'id' parameter");
  }

  const post = await prisma.portfolio.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  // Convert BigInt values to strings before sending the JSON response
  const postWithStringBigInts = convertBigIntsToStrings(post);

  return NextResponse.json(postWithStringBigInts);
}

export async function PUT(request, { params }) {
  const id = params.id;
  if (!id) {
    return NextResponse.error("Missing 'id' parameter");
  }

  const post = await prisma.portfolio.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const { title, desc, img, color, link } = await request.json();

  // Convert BigInt values to strings before updating
  const updatedPost = await prisma.portfolio.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title,
      desc,
      img,
      color,
      link,
    },
  });

  // Convert BigInt values to strings before sending the JSON response
  const updatedPostWithStringBigInts = convertBigIntsToStrings(updatedPost);

  return NextResponse.json({ success: 1, post: updatedPostWithStringBigInts, message: 'Update success' });
}

export async function DELETE(request, { params }) {
  const id = params.id;
  if (!id) {
    return NextResponse.error("Missing 'id' parameter");
  }

  const deletePost = await prisma.portfolio.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({ success: 1, message: 'Delete success' });
}
