precision highp float;

uniform sampler2D colorMap;
uniform float limit;
uniform float power;
uniform float C;
uniform float D;
uniform bool antiAlias;
varying vec2 sampleOffset;
varying vec2 textureCoordinates;

vec4 sample(vec2 vector)
{
	float x = vector.x;
	float y = vector.y;

	int n = int(limit);

	for (int i = 0; i < 256; i++)
	{
		float squared = x*x + y*y;

		if (squared > 4.0 || i > n)
		{
			n = i;

			break;
		}

		float radius = pow(squared, power*0.5);
		float angle = power*atan(y, x);

		x = radius*cos(angle) + C;
		y = radius*sin(angle) + D;
	}

	float factor = float(n)/float(int(limit));

	return texture2D(colorMap, vec2(factor, 0.0));
}

void main()
{
	if (true && antiAlias)
	{
		vec4 a = sample(textureCoordinates + sampleOffset*vec2(-0.5, -0.5));
		vec4 b = sample(textureCoordinates + sampleOffset*vec2(-0.5,  0.5));
		vec4 c = sample(textureCoordinates + sampleOffset*vec2( 0.5, -0.5));
		vec4 d = sample(textureCoordinates + sampleOffset*vec2( 0.5,  0.5));
		vec4 e = sample(textureCoordinates + sampleOffset*vec2( 0.0,  0.0));

		gl_FragColor = (a + b + c + d + e)*0.2;
	}
	else
	{
		gl_FragColor = sample(textureCoordinates);
	}
}
