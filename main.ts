import { eventmit } from "https://cdn.skypack.dev/eventmit?dts";
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const event = eventmit<{ key: string }>();
    event.on((value) => {
        console.log(1, value);
    });
    event.on((value) => {
        console.log(2, value);
    });
    event.emit({
        key: "value",
    });
}
