"""empty message

Revision ID: 2f1d1c533959
Revises: 09ec251184d3
Create Date: 2022-04-24 20:23:52.577630

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2f1d1c533959'
down_revision = '09ec251184d3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('category_creative_key', 'category', type_='unique')
    op.drop_constraint('category_health_key', 'category', type_='unique')
    op.drop_constraint('category_professional_key', 'category', type_='unique')
    op.drop_constraint('category_school_key', 'category', type_='unique')
    op.drop_column('category', 'professional')
    op.drop_column('category', 'health')
    op.drop_column('category', 'creative')
    op.drop_column('category', 'school')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('category', sa.Column('school', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.add_column('category', sa.Column('creative', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.add_column('category', sa.Column('health', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.add_column('category', sa.Column('professional', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.create_unique_constraint('category_school_key', 'category', ['school'])
    op.create_unique_constraint('category_professional_key', 'category', ['professional'])
    op.create_unique_constraint('category_health_key', 'category', ['health'])
    op.create_unique_constraint('category_creative_key', 'category', ['creative'])
    # ### end Alembic commands ###
