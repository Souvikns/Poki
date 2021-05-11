import path from 'path';
import fs from 'fs';

export const getPokemonSprite = (id: number) => {
    const filePath = path.resolve(__dirname, "sprites", "pokemon", `${id}.png`);
    if (!fs.existsSync(filePath)) {
        return new Error("File not found");
    }
    return filePath;
}
