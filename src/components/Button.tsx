type ButtonProps = {
    text: string
}

export function Button({ text }: ButtonProps) {
    return <button className="bg-orange-500 rounded px-2 py-1 hover:bg-orange-400 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">{text}</button>
}