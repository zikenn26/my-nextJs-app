import { NextRequest, NextResponse } from 'next/server';

let items: { id: number, name: string }[] = [
    { id: 1, name: 'Pen' },
    { id: 2, name: 'Book' },
    { id: 3, name: 'Eraser' },
];

export async function GET() {
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const newItem = {
        id: items.length + 1,
        name: body.name
    };
    items.push(newItem);
    newItem.id = items.length;
    return NextResponse.json({ message: 'Item added successfully', item: newItem }, { status: 201 });
}

export async function PUT(request: NextRequest) {
    const body = await request.json();
    const itemIndex = items.findIndex(item => item.id === body.id);
    if (itemIndex === -1) {
        return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }
    items[itemIndex].name = body.name;
    return NextResponse.json({ message: 'Item updated successfully', item: items[itemIndex] });
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const itemIndex = items.findIndex(item => item.id === body.id);
    if (itemIndex === -1) {
        return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }
    items.splice(itemIndex, 1);
    return NextResponse.json({ message: 'Item deleted successfully' });
}
