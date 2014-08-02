precision highp float;

uniform mat3 textureMatrix;
uniform float viewportHeight;
uniform float viewportWidth;
attribute vec3 vertexPosition;
varying vec2 sampleOffset;
varying vec2 textureCoordinates;

void main()
{
	sampleOffset.x = (textureMatrix[0][0] + textureMatrix[1][0])/viewportWidth;
	sampleOffset.y = (textureMatrix[0][1] + textureMatrix[1][1])/viewportHeight;
	textureCoordinates = (textureMatrix*vec3(vertexPosition.xy, 1.0)).xy;
	gl_Position = vec4(vertexPosition, 1.0);
}
