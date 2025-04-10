import test, { beforeEach, describe } from 'node:test';
import { Usuario } from './Usuario';

describe('Usuario Class', () => {
    let usuario: Usuario;
    beforeEach(() => {
        usuario = new Usuario('Amin', 'amin@example.com', 'Developer', 10, true);
      });

      test('should return the correct name', () => {
        expect(usuario.getName());
      });
    
      test('should return the correct profile', () => {
        const expectedProfile = 'El usuario es Amin, se dedica a Developer y tiene 10 años de experiencia.';
        expect(usuario.getProfile());
      });
    
      test('should return the correct active status', () => {
        expect(usuario.isStillActive());
      });
    
      test('should return false for inactive user', () => {
        usuario = new Usuario('Amin', 'amin@example.com', 'Developer', 10, false);
        expect(usuario.isStillActive());
      });
    
});

function expect(arg0: any) {
    throw new Error('Function not implemented.');
}
