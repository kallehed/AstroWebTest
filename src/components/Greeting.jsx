import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3 class="bg-rose-500 text-9xl hover:text-yellow-400 transition hover:rotate-1 font-medium cursor-not-allowed">{greeting}! Thank you for le visit!</h3>
            <button onClick={() => setGreeting(randomMessage())} style="
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		user-select: none;
		border: 1px solid transparent;
		padding: .375rem .75rem;
		font-size: 1rem;
		line-height: 1.5;
		border-radius: .25rem;
		
	" class="bg-purple-300">
                New greeting
            </button>
        </div>
    );
}