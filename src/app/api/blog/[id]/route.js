import { NextRequest, NextResponse } from 'next/server';
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

  return NextResponse.json(post);
}

export async function PUT(request,{ params }) {
    const id =  params.id
    if (!id) {
      return NextResponse.error("Missing 'id' parameter");
    }

   const post = await prisma.portfolio.findUnique({
      where: {
        id: parseInt(id),
      },
    }) 

    const { title,  desc,  color,  link,img, } = await request.json();
     const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        desc,
        color,
    link,
    img,

      },
    });

    return NextResponse.json({success:1,"post":updatedPost,"message":"Update success"});
}

export async function DELETE(request ,{ params }) {
  const id =  params.id
  if (!id) {
    return NextResponse.error("Missing 'id' parameter");
  }

 const deletePost = await prisma.post.delete({
    where: {
      id: parseInt(id),
    },
  }) 

  return NextResponse.json({success:1,"message":"Delete success"});
}